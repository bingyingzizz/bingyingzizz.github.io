# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

其中 $\widehat f$ 的取值在 $\mathbb{R}^{m-r}$ 里。**这一步用掉了「$f'$ 的前 $r$ 个分量可以当坐标」这个事实。**

**第三步：$\widehat f$ 不依赖 $y''$。** 由**常秩**假设，$D(f\circ\Phi^{-1})$ 在每点秩恒为 $r$；而它的前 $r$ 行是 $(I_r\ \ 0)$（因为第一分量就是 $y'$），于是后 $m - r$ 行必须是前 $r$ 行的线性组合。设后 $m-r$ 行的第一块为 $D_{y'}\widehat f$，则

$$\operatorname{rank}\begin{pmatrix} I_r & 0 \\ D_{y'}\widehat f & D_{y''}\widehat f \end{pmatrix} = r \iff D_{y''}\widehat f \equiv 0$$

> 续见 proofs/imp.rank-theorem.4.md
