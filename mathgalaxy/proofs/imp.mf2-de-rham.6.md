# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

- 沿 $p$ 先算：Čech 方向要**对每个 $q$ 都正合**。⚠️ 理由**不是**「层条件」—— 层条件只给出 $0 \to \underline{\mathbb{R}} \to \Omega^{0} \to \Omega^{1}$ 这一段；高次要靠 $\Omega^{q}$ 是**细层** $+$ 仿紧（单位分解给出细消解，细层无高阶 Čech 上同调）。得 $H^{\bullet}_{\mathrm{dR}}(M)$。

两者收敛到同一极限，故 $H^{\bullet}_{\mathrm{dR}}(M) \cong \check{H}^{\bullet}(M;\underline{\mathbb{R}})$。

再用 `thm.paracompact-cech-equals-sheaf`（仿紧流形上 Čech 等于层上同调）得 $H^{\bullet}_{\mathrm{dR}}(M) \cong H^{\bullet}(M;\underline{\mathbb{R}})$。

> 续见 proofs/imp.mf2-de-rham.7.md
