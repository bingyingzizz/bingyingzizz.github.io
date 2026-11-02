# 同样的 $\Phi(x,y) = (x, F_0(x,y))$ 构造，换到 Banach 空间
`imp.implicit-function-banach` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 + `thm.inverse-function-banach` 逆映射定理（Banach 版） → `thm.implicit-function-banach` 隐函数定理（Banach 版）

都是良定义且有界的（$D_yF_0$ 拓扑同构 $\implies$ 逆有界；块上三角的有界性由范数估计直接给出）。故 $D\Phi(a,b)$ 拓扑同构。

**第三步：用 Banach 版逆映射定理**（`thm.inverse-function-banach`）得到局部逆 $\Theta$，它同样保持第一个分量不变，取 $g(x) := \theta(x, 0)$ 即得。

**第四步：$Dg$ 的公式**由对 $F_0(x, g(x)) = 0$ 求导得到，与有限维一致。∎

> ⭐ 这条边存在的价值：它说明**隐函数定理的证明思想与空间无关** —— 唯一随空间改变的是「可逆」的含义（有限维：逆自动有界；无限维：必须假设拓扑同构）。
