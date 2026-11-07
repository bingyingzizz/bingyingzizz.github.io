# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第五步：Henkin 见证。** 设 $\kappa=\max(|\mathcal{L}|,\aleph_0)$（即便语言有限，语句也有可数多个）。添 $\kappa$ 个新常元 $\{c_\beta:\beta<\kappa\}$ 得 $\mathcal{L}^{+}$，把 $\mathcal{L}^{+}$ 中所有形如 $\exists x\,\theta(x)$ 的语句按序数枚举为 $\{\xi_\alpha:\alpha<\kappa\}$。**按序数超限递归**造 $\Gamma_\alpha$：若 $\Gamma_\alpha\cup\{\xi_\alpha\}$ 一致且 $\xi_\alpha=\exists x\,\theta(x)$，取一个未用过的 $c_\beta$，令 $\Gamma_{\alpha+1}=\Gamma_\alpha\cup\{\theta(c_\beta)\}$；否则 $\Gamma_{\alpha+1}=\Gamma_\alpha$，极限序数取并。

> 续见 notes/thm.completeness-first-order.7.md
