# 笛卡尔闭范畴　`def.cartesian-closed-category`　·　说明
根 `../`

**例**：$\mathbf{Set}$ 中 $Y^X=\hom(X,Y)$；$G\text{-}\mathbf{Set}$ 中 $Y^X$ 取共轭作用 $(g\cdot f)(x)=g f(g^{-1}x)$。

**反例**：$\mathbf{Top}$ 一般不是笛卡尔闭（指数拓扑使求值连续的条件太强）；紧生成弱 Hausdorff 空间 $\mathbf{CGWH}$ 才是，见 `prop.cg-cartesian-closed`。

**与充实范畴的 internal hom 分开**：`def.internal-hom` 是充实范畴里的 hom 对象；本条的 $Y^X$ 是普通范畴中的指数对象。
