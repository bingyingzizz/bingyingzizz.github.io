# 二阶 Taylor + 正定二次型的估计 $\implies$ 极值判别
`imp.second-derivative-test` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.sylvester-criterion` Sylvester 判据 + `thm.spectral-theorem` 谱定理（实对称） → `thm.second-derivative-test` 极值判别（Hessian 判据）

**半定 / 退化**：不做判断 —— 结论需要 $k > 2$ 的信息（反例见节点说明：$x^{4}+y^{4}$ 与 $x^{4}-y^{4}$ 在原点同为 $H = 0$，结论相反）。

> ⭐ 整条证明只用了两个外部事实：**二次型的特征值估计**（谱定理）与 **$o$ 记号的显式控制**。前者是线性代数，后者是微积分 —— 这条定理正是两者接口的样板。
