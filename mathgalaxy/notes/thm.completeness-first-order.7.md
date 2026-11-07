# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

各 $\Gamma_\alpha$ 一致（对 $\alpha$ 归纳，极限步用有限特征）：若 $\Gamma_\alpha\cup\{\theta(c_\beta)\}$ 不一致，推论给 $\Gamma_\alpha\vdash\neg\theta(c_\beta)$；$c_\beta$ 不出现在 $\Gamma_\alpha$ 中，把 $c_\beta$ 换成证明中未出现的变元 $y$ 并推广，得 $\Gamma_\alpha\vdash\forall y\,\neg\theta(y)$，再由 (Q1) 与命题逻辑得 $\Gamma_\alpha\vdash\neg\exists x\,\theta(x)$，与「$\Gamma_\alpha\cup\{\xi_\alpha\}$ 一致」矛盾。于是 $\Gamma_\kappa=\bigcup_{\alpha<\kappa}\Gamma_\alpha$ 一致（有限特征），再由第四步扩为极大一致 $\Gamma^{*}$。见证性质：若 $\exists x\,\theta\in\Gamma^{*}$ 且编号为 $\alpha$，则 $\Gamma_\alpha\cup\{\exists x\,\theta\}\subseteq\Gamma^{*}$ 一致，故第 $\alpha$ 步添了 $\theta(c_\beta)$，即 $\theta(c_\beta)\in\Gamma^{*}$。

> 续见 notes/thm.completeness-first-order.8.md
