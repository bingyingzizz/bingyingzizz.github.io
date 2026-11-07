# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第四步：极大一致扩张。** 引理：每个一致语句集 $\Gamma$ 可扩张为极大一致语句集 $\Gamma^{*}$。证明：取 $\kappa=\max(|\mathcal{L}|,\aleph_0)$（语言 $\mathcal{L}$ 先良序 —— 这一步用选择公理），按序数枚举所有语句 $\{\psi_\alpha:\alpha<\kappa\}$；令 $\Gamma_0=\Gamma$，若 $\Gamma_\alpha\cup\{\psi_\alpha\}$ 一致则 $\Gamma_{\alpha+1}=\Gamma_\alpha\cup\{\psi_\alpha\}$，否则 $\Gamma_{\alpha+1}=\Gamma_\alpha$，极限序数取并；令 $\Gamma^{*}=\bigcup_{\alpha<\kappa}\Gamma_\alpha$。一致性：若 $\Gamma^{*}$ 不一致，则某个证明只用到有限多条假设，它们全在某个 $\Gamma_\alpha$ 中，与 $\Gamma_\alpha$ 一致矛盾。极大性：若 $\psi_\alpha\notin\Gamma^{*}$，则 $\Gamma_\alpha\cup\{\psi_\alpha\}$ 不一致，由推论得 $\Gamma_\alpha\vdash\neg\psi_\alpha$，故 $\Gamma^{*}\vdash\neg\psi_\alpha$。由此：对每个语句恰有 $\psi\in\Gamma^{*}$ 或 $\neg\psi\in\Gamma^{*}$；$\Gamma^{*}$ 对 $\vdash$ 封闭（若 $\Gamma^{*}\vdash\psi$ 而 $\psi\notin\

> 续见 notes/thm.completeness-first-order.5.md
