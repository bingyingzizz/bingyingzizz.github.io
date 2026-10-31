# Riemann 曲率张量　`def.curvature-tensor`　·　说明
根 `../`

**来处是可积性条件**。想找坐标把 $g_{ij}$ 拉成 $\delta_{ij}$，等价于解 $g_{ij} = \delta_{\alpha\beta}\frac{\partial y^{\alpha}}{\partial x^{i}}\frac{\partial y^{\beta}}{\partial x^{j}}$；而「$\partial_{i}\partial_{j} = \partial_{j}\partial_{i}$」的相容性要求的正是 $R^{\ell}_{ijk} = 0$。所以 $R$ 从一开始就是「能不能把度量摊平」的阻碍。

**Ricci 恒等式**：$[\nabla_{\partial_{i}},\nabla_{\partial_{j}}]\partial_{k} = R^{\ell}_{ijk}\partial_{\ell}$。所以 $R$ 度量的是「协变导数交换次序差多少」—— 这是它最常用的定义方式，也是本图选它的理由。

**为什么内蕴**：$R$ 的公式里只有 $\Gamma$ 与 $\partial\Gamma$，而 $\Gamma$ 只有 $g$ 与 $\partial g$。**第二基本形式没有出现。**

⚠️ 二维时独立分量只有一个（$R_{1212}$，其余由对称性决定），所以曲面上的「曲率」是一个数而不是一堆数；三维以上 $R$ 才真正有张量结构（那时 $K$ 只能给出它的迹的部分）。

> 续见 notes/def.curvature-tensor.2.md
