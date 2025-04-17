
// . Inventory Management System
//  Description: Implement an abstract class InventoryItem with properties like itemID, itemName, quantity,
//  and methods such as updateStock(). Create subclasses like PerishableItem, NonPerishableItem, and ElectronicsItem, 
//  each defining their own stock update logic.


abstract class InventoryItem {
    itemID: string;
    itemName: string;
    quantity: number;
 
    
    updateStock(amount: number): void {
        this.quantity += amount;
        console.log(`Updated stock for ${this.itemName}: ${this.quantity}`);
    }
    constructor(itemID: string, itemName: string, quantity: number) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.quantity = quantity;

    }
}     
class  PerishableItem extends InventoryItem { 
    expirationDate: Date;

    constructor(itemID: string, itemName: string, quantity: number, expirationDate: Date) {
        super(itemID, itemName, quantity);
        this.expirationDate = expirationDate;
    }

    updateStock(amount: number): void {
        if (this.expirationDate > new Date()) {
            super.updateStock(amount);
        } else {
            console.log(`Cannot update stock for expired item: ${this.itemName}`);
        }
    }
}


