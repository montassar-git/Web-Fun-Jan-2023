import java.util.ArrayList;

public class TestCafe {
    public static void main(String[] args) {
        CafeUtil appTest = new CafeUtil();

        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());

        System.out.println("----- Order Total Test -----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n", appTest.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test -----");
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        appTest.displayMenu(menu);

        System.out.println("\n----- Add Customer Test -----");
        ArrayList<String> customers = new ArrayList<String>();
        // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            appTest.addCustomer(customers);
            System.out.println("\n");
        }

        System.out.println("----- Price Chart Test -----");
        appTest.printPriceChart("Columbian Coffee Grounds", 15.0, 3);

        System.out.println("----- Display Menu Overload Test -----");
        ArrayList<Double> prices = new ArrayList<Double>();
        prices.add(1.5);
        prices.add(3.5);
        prices.add(4.5);
        prices.add(3.5);
        appTest.displayMenu(menu, prices);
    }
}
