"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, ChevronDown, Eye, Heart, Search, ShoppingCart, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "AudioTech",
    category: "Electronics",
    price: 199.99,
    views: 4582,
    purchased: 342,
    wishlist: 876,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "ComfortPlus",
    category: "Furniture",
    price: 249.99,
    views: 3210,
    purchased: 187,
    wishlist: 543,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "TechFit",
    category: "Wearables",
    price: 129.99,
    views: 6721,
    purchased: 529,
    wishlist: 1243,
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "EcoWear",
    category: "Clothing",
    price: 34.99,
    views: 2187,
    purchased: 412,
    wishlist: 321,
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "PhotoPro",
    category: "Electronics",
    price: 899.99,
    views: 3876,
    purchased: 98,
    wishlist: 754,
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "EcoWare",
    category: "Kitchen",
    price: 24.99,
    views: 1987,
    purchased: 765,
    wishlist: 432,
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "GameTech",
    category: "Electronics",
    price: 79.99,
    views: 5432,
    purchased: 876,
    wishlist: 654,
  },
  {
    id: 8,
    name: "Leather Wallet",
    image: "https://gulfseagrant.org/wp-content/uploads/2022/10/Placeholder_view_vector.jpg",
    brand: "LuxeGoods",
    category: "Accessories",
    price: 49.99,
    views: 2345,
    purchased: 543,
    wishlist: 321,
  },
]

// Extract unique brands and categories
const brands = [...new Set(products.map((product) => product.brand))]
const categories = [...new Set(products.map((product) => product.category))]

export default function ProductFilterTable() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortField, setSortField] = useState<string>("views")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      // Filter by search query
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Filter by selected brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false
      }

      // Filter by selected categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      // Sort by selected field
      const fieldA = a[sortField as keyof typeof a]
      const fieldB = b[sortField as keyof typeof b]

      if (typeof fieldA === "number" && typeof fieldB === "number") {
        return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA
      }

      // For string fields
      if (typeof fieldA === "string" && typeof fieldB === "string") {
        return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
      }

      return 0
    })

  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Handle sort change
  const handleSortChange = (field: string) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <Card className="w-full bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Brand Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <span>Brand</span>
                <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/20">
                  {selectedBrands.length || "All"}
                </Badge>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Brand</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {brands.map((brand) => (
                <DropdownMenuCheckboxItem
                  key={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                >
                  {brand}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <span>Category</span>
                <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/20">
                  {selectedCategories.length || "All"}
                </Badge>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort By */}
          <Select value={sortField} onValueChange={(value) => handleSortChange(value)}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Product Name</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="views">Views</SelectItem>
              <SelectItem value="purchased">Purchases</SelectItem>
              <SelectItem value="wishlist">Wishlist</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort Direction */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))}
          >
            {sortDirection === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-500 mb-4">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-500">Product</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500">Brand</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500">Category</th>
              <th
                className="text-right py-3 px-4 font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSortChange("price")}
              >
                <div className="flex items-center justify-end gap-1">
                  Price
                  {sortField === "price" &&
                    (sortDirection === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />)}
                </div>
              </th>
              <th
                className="text-right py-3 px-4 font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSortChange("views")}
              >
                <div className="flex items-center justify-end gap-1">
                  <Eye className="h-4 w-4 text-gray-400" />
                  Views
                  {sortField === "views" &&
                    (sortDirection === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />)}
                </div>
              </th>
              <th
                className="text-right py-3 px-4 font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSortChange("purchased")}
              >
                <div className="flex items-center justify-end gap-1">
                  <ShoppingCart className="h-4 w-4 text-gray-400" />
                  Purchased
                  {sortField === "purchased" &&
                    (sortDirection === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />)}
                </div>
              </th>
              <th
                className="text-right py-3 px-4 font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSortChange("wishlist")}
              >
                <div className="flex items-center justify-end gap-1">
                  <Heart className="h-4 w-4 text-gray-400" />
                  Wishlist
                  {sortField === "wishlist" &&
                    (sortDirection === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />)}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div className="font-medium">{product.name}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="outline" className="font-normal">
                    {product.brand}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="secondary" className="font-normal">
                    {product.category}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-right font-medium">${product.price.toFixed(2)}</td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-medium">{formatNumber(product.views)}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-medium">{formatNumber(product.purchased)}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-medium">{formatNumber(product.wishlist)}</span>
                  </div>
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No products found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

