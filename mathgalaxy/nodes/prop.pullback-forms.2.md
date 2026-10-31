# 拉回　`prop.pullback-forms`　·　续页（第 2 页）
[在星图里打开](../#n=prop.pullback-forms)　·　第 1 页 [nodes/prop.pullback-forms.md](./prop.pullback-forms.md)

## 陈述（续）
设 $F : U\to V$ 是开集间的 $C^{\infty}$ 映射，$\omega$ 是 $V$ 上的 $k$-形式。**拉回** $F^{\ast}\omega$ 是 $U$ 上的 $k$-形式，定义为
$$(F^{\ast}\omega)_{p}(v_{1},\ldots,v_{k}) := \omega_{F(p)}\bigl(\mathrm{d}F_{p}(v_{1}),\ldots,\mathrm{d}F_{p}(v_{k})\bigr).$$

于是 $F^{\ast}$ 把 $\Omega^{k}(V)$ 送到 $\Omega^{k}(U)$，且满足
1. **线性**：$F^{\ast}(a\omega+b\eta) = a\,F^{\ast}\omega+b\,F^{\ast}\eta$；对函数 $F^{\ast}f = f\circ F$；
2. **保楔积**：$F^{\ast}(\omega\wedge\eta) = F^{\ast}\omega\wedge F^{\ast}\eta$；
3. **与 $\mathrm{d}$ 交换**：$F^{\ast}(
\mathrm{d}\omega) = \mathrm{d}(F^{\ast}\omega)$；
4. **保复合**：$(G\circ F)^{\ast} = F^{\ast}\circ G^{\ast}$，$(\operatorname{id})^{\ast} = \operatorname{id}$。

> 续见 [nodes/prop.pullback-forms.3.md](./prop.pullback-forms.3.md)
