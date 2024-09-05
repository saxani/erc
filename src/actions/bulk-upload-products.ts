'use server';
import { db } from '@/db';

export async function bulkUploadProducts(products: any) {
  const { data } = products;

  for (let item of data) {
    if (!item['Product Name']) {
      continue;
    }

    let categories = [];
    for (let i = 1; i < 15; i++) {
      item[`Category Path - ${i}`] &&
        categories.push({
          category: {
            connect: {
              path: item[`Category Path - ${i}`],
            },
          },
        });
    }

    let images = [];
    for (let i = 1; i < 12; i++) {
      if (item[`Product Image File - ${i}`]) {
        images.push({
          filename: item[`Product Image File - ${i}`],
          description: item[`Product Image Description - ${i}`] || null,
          thumbnail:
            item[`Product Image Is Thumbnail - ${i}`] == 1 ? true : false,
          index: item[`Product Image Index - ${i}`],
        });
      }
    }

    let files = [];
    for (let i = 1; i < 4; i++) {
      if (item[`Product File - ${i}`]) {
        files.push({
          file: item[`Product File - ${i}`],
          description: item[`Product File Description - ${i}`] || null,
        });
      }
    }

    let inventoried;
    if (item['Product Inventoried'] == 1) {
      inventoried = true;
    } else if (item['Product Inventoried'] == 0) {
      inventoried = false;
    } else {
      inventoried = null;
    }

    let hasVariants;
    if (item['Has Variants'] == 1) {
      hasVariants = true;
    } else if (item['Has Variants'] == 0) {
      hasVariants = false;
    } else {
      hasVariants = null;
    }

    try {
      await db.product.create({
        data: {
          oldRef: item['Product ID'] || null,
          sku: item['Product SKU'] || null,
          slug: item['Product URL'],
          type: item['Item Type'],
          hasVariants: hasVariants,
          optionType: item['Option Type'] || null,
          optionValue: item['Option Value'] || null,
          name: item['Product Name'],
          description: item['Description'],
          stockLevel: parseInt(item['Stock Level']) || null,
          lowStockLevel: parseInt(item['Low Stock Level']) || null,
          trackInventory: item['Track Inventory'],
          inventoried: inventoried,
          visible: item['Product Visible'] == 1 ? true : false,
          allowOrders: item['Allow Orders'] == 1 ? true : false,
          availability: item['Product Availability'] || null,
          maximumOrderQuantity:
            parseInt(item['Maximum Order Quantity']) > 0
              ? parseInt(item['Maximum Order Quantity'])
              : null,
          width:
            parseFloat(item['Width']) > 0 ? parseFloat(item['Width']) : null,
          height:
            parseFloat(item['Height']) > 0 ? parseFloat(item['Height']) : null,
          depth:
            parseFloat(item['Depth']) > 0 ? parseFloat(item['Depth']) : null,
          flippablePDF: item['Flippable PDF'] || null,
          categories: {
            create: categories,
          },
          images:
            {
              connectOrCreate: images.map((el) => ({
                where: {
                  filename: el.filename,
                },
                create: {
                  filename: el.filename,
                  description: el.description,
                  thumbnail: el.thumbnail,
                  index: parseInt(el.index),
                },
              })),
            } || null,
          files:
            {
              connectOrCreate: files.map((el) => ({
                where: {
                  filename: el.file,
                },
                create: {
                  filename: el.file,
                  description: el.description,
                },
              })),
            } || null,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      } else {
        return 'Something went wrong;';
      }
    }
  }

  console.log('Products uploaded!');
}
