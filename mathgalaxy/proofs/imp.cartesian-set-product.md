# imp.cartesian-set-product
`imp.cartesian-set-product` · 推出 · strong 边 · 根 `../`

`thm.product` 笛卡尔积存在 → `prop.cartesian-product-is-set-product` 笛卡尔积是集合范畴的积

由 `thm.product`，$X\times Y$ 存在且带投影 $\pi_1,\pi_2$。给定 $f:Z\to X$、$g:Z\to Y$，令 $h(z)=(f(z),g(z))$，则 $\pi_1\circ h=f$、$\pi_2\circ h=g$。若 $h'$ 也满足，则对每个 $z$，$h'(z)$ 的两个分量分别为 $f(z),g(z)$，故 $h'=h$。这正是积的泛性质，故 $\mathbf{Set}$ 中的积就是笛卡尔积。$\blacksquare$
