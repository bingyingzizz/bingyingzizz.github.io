# 拉回　`prop.pullback-form-manifold`　·　续页（第 2 页）
[在星图里打开](../#n=prop.pullback-form-manifold)　·　第 1 页 [nodes/prop.pullback-form-manifold.md](./prop.pullback-form-manifold.md)

## 陈述（续）
集那版只是它的局部样子。
设 $F : M\to N$ 是光滑映射，$\omega\in\Omega^{k}(N)$。**拉回** $
F^{\ast}\omega\in\Omega^{k}(M)$ 逐点定义为
$$(F^{\ast}\omega)
_{p}(v_{1},\ldots,v_{k}) := \omega_{F(p)}\bigl(\mathrm
{d}F_{p}v_{1},\ldots,\mathrm{d}F_{p}v_{k}\bigr)$$
其中 $v
_{i}\in T_{p}M$。则 $F^{\ast}\omega$ 光滑，且
1. $F^{\ast}$ 是 $\mathbb{R}$-线性的；对函数 $F^{\ast}f = f\circ F
$；
2. **保楔积**：$F^{\ast}(\omega\wedge\eta) = F^{\ast}
\omega\wedge F^{\ast}\eta$；
3. **与 $\mathrm{d}$ 交换**：
$\mathrm{d}(F^{\ast}\omega) = F^{\ast}(\mathrm{d}\omega)
$；
4. **保复合**：$(G\circ F)^{\ast} = F^{\ast}\circ G^{\
ast}$，$(\operatorname{id})^{\ast} = \operatorname{id}$。

> 续见 [nodes/prop.pullback-form-manifold.3.md](./prop.pullback-form-manifold.3.md)
