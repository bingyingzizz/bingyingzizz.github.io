# 滤过范畴　`def.filtered-category`
滤过范畴与滤过余极限（Filtered Category）
layer 10 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.filtered-category)　·　[节点索引](../index.md)

范畴 $I$ 叫**滤过的**（filtered），如果：

1. **非空**：$I$ 至少有一个对象；
2. **上界**：对任意 $i, j \in I$，存在 $k \in I$ 与态射 $i \to k$、$j \to k$；
3. **余等化**：对任意平行的 $u, v : i \rightrightarrows j$，存在 $w : j \to k$ 使 $w \circ u = w \circ v$。

等价的说法是：**$I$ 中每个有限图都有余锥。** 沿滤过范畴取的余极限叫**滤过余极限**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.filtered-category.2.md](./def.filtered-category.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.filtered-category.3.md](./def.filtered-category.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.filtered-category.md`

引用：`def.filtered-category`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
