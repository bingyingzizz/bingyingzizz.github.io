# 线性映射 ⟷ 矩阵　`thm.matrix-linear-map`
定理：选定基后，线性映射与矩阵一一对应
layer 10 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.matrix-linear-map)　·　[节点索引](../index.md)

设 $V$ 有有序基 $\mathcal{B} = (v_1, \ldots, v_n)$、$W$ 有有序基 $\mathcal{C} = (w_1, \ldots, w_m)$，都是有限维 $K$-向量空间。称 $m \times n$ 矩阵 $[T]_{\mathcal{B}}^{\mathcal{C}}$ 为 $T$ 在这两组基下的**矩阵**，其中第 $j$ 列是 $T(v_j)$ 在 $\mathcal{C}$ 下的坐标。

于是映射 $T \mapsto [T]_{\mathcal{B}}^{\mathcal{C}}$ 是 $K$-向量空间的同构
> 陈述续见 [nodes/thm.matrix-linear-map.2.md](./thm.matrix-linear-map.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.matrix-ring`](../nodes/thm.matrix-ring.md) M_n(K) 是环

- …另有出边，续页见 [nodes/thm.matrix-linear-map.4.md](./thm.matrix-linear-map.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.matrix-linear-map.3.md](./thm.matrix-linear-map.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 3；Lang, Linear Algebra

> 说明见 `notes/thm.matrix-linear-map.md`

引用：`thm.matrix-linear-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
