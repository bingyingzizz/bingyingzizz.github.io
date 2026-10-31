# 模长的三角不等式　`prop.complex-triangle`　·　说明
根 `../`

⭐ 证明的妙处在于**不去估和，而是先把和转到实轴上**：令 $\theta$ 是 $\sum_k z_k$ 的一个辐角（和为零时结论显然），则

$$\left| \sum_k z_k \right| = e^{-i\theta}\sum_k z_k = \operatorname{Re}\left( e^{-i\theta}\sum_k z_k \right) = \sum_k \operatorname{Re}\left( e^{-i\theta} z_k \right) \le \sum_k \left| e^{-i\theta} z_k \right| = \sum_k |z_k|.$$

第 2 个等号是「非负实数等于自己的实部」，最后一步是 $\operatorname{Re} w \le |w|$。

⭐ 等号条件从中直接读出：每一步都要取等，即每个 $e^{-i\theta} z_k$ 都是非负实数。

⭐ 两条常用推论：反三角不等式 $\big| |z| - |w| \big| \le |z - w|$；以及积分基本不等式 $\left| \int_\gamma f\,\mathrm{d}z \right| \le \int_\gamma |f|\,|\mathrm{d}z| \le \max_\gamma |f| \cdot L(\gamma)$ —— 后面的 Cauchy 不等式与 Liouville 定理全靠它。

> 续见 notes/prop.complex-triangle.2.md
