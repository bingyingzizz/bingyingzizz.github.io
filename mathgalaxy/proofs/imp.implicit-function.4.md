# 对 $\Phi(x,y) = (x, F(x,y))$ 用逆映射定理 $\implies$ 隐函数定理
`imp.implicit-function` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 → `thm.implicit-function` 隐函数定理

**第六步：唯一性与 $Dg$ 的公式。** 若 $\widehat g$ 也在 $V$ 上满足 $\widehat g(a) = b$、$F(x, \widehat g(x)) = 0$，则 $(x, \widehat g(x))$ 是 $(x, 0)$ 在 $\Phi$ 下的原像，由 $\Phi$ 在 $\widetilde U$ 上单射得 $\widehat g = g$。最后对 $F(x, g(x)) = 0$ 两边求导并用链式法则：$D_xF + D_yF \cdot Dg = 0$，解出 $Dg = -(D_yF)^{-1} D_xF$。∎

> ⭐ 整条证明里**没有任何新的分析技巧** —— 全部内容都打包在 $\Phi$ 这个构造里。这就是「隐函数定理 = 逆映射定理的换装」的确切含义：同一件事换个写法，条件也随之翻译（$D\Phi$ 可逆 $\iff$ $D_yF$ 可逆）。
