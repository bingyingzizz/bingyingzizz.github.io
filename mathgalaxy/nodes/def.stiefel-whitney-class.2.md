# Stiefel–Whitney 类　`def.stiefel-whitney-class`　·　续页（第 2 页）
[在星图里打开](../#n=def.stiefel-whitney-class)　·　第 1 页 [nodes/def.stiefel-whitney-class.md](./def.stiefel-whitney-class.md)

## 陈述（续）
设 $E \to B$ 是秩 $k$ 的实向量丛。$E$ 的 **Stiefel–Whitney 类**是一族

$$w_{i}(E) \in H^{i}(B; \mathbb{Z}/2), \qquad i = 0, 1, \ldots, k ,$$

由下列公理唯一确定：
1. $w_{0} = 1$，$i > k$ 时 $w_{i} = 0$；
2. **自然性**：$w_{i}(f^{*}E) = f^{*}w_{i}(E)$；
3. **Whitney 乘积公式**：$w(E \oplus E') = w(E) \smile w(E')$，其中 $w = 1 + w_{1} + \c
dots$；
4. **规范化**：线丛 $L$ 的 $w_{1}(L)$ 是 $H^{1}(B;\mathbb{Z}/2)$ 里那个「定向双重覆叠」对应的类（等价地：非平凡实线丛的 $w_{1} \ne 0$）。
**最低一条的含义**：$w_{1}(E) = 0$ 当且仅当 $E$ **可定向**（见 `prop.orientable-iff-w1`）。

> 续见 [nodes/def.stiefel-whitney-class.3.md](./def.stiefel-whitney-class.3.md)
