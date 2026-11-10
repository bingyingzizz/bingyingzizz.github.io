# 二面体群　`def.dihedral-group`　·　说明
根 `../`

**几何**：$D_{n}$ 的元素是 $n$ 个旋转 $1,r,\ldots,r^{n-1}$ 与 $n$ 个反射 $s,rs,\ldots,r^{n-1}s$；反射都是 $2$ 阶。

**结构**：$D_{n}\cong\mathbb{Z}/n\rtimes\mathbb{Z}/2$，其中 $\mathbb{Z}/2$ 通过 $r\mapsto r^{-1}$ 作用在 $\mathbb{Z}/n$ 上（见 `def.semidirect-product`）。旋转子群 $\langle r\rangle$ 正规，商为 $\mathbb{Z}/2$。

**低阶**：$D_{3}\cong S_{3}$（正三角形对称群，阶 $6$）；$D_{4}$ 是正方形对称群（阶 $8$）；$D_{n}$ 可解，因为 $\mathbb{Z}/n$ 与 $\mathbb{Z}/2$ 都交换。

⚠ **记号歧义**：有的书用 $D_{2n}$ 表示阶 $2n$ 的二面体群；本图统一用 $D_{n}$ 表示阶 $2n$。
