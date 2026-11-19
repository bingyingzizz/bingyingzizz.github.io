# imp.rn-complex
`imp.rn-complex` · 推出 · strong 边 · 根 `../`

`def.complex-measure` 复测度 + `def.signed-measure` 符号测度 + `thm.hahn-decomposition` Hahn 分解定理 + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 → `thm.rn-complex` 复测度的 Radon–Nikodym

**证明（把复情形拆回已经证过的实情形）。**
- **拆复测度**：$\nu = \nu_{1} + i\nu_{2}$，$\nu_{1}, \nu_{2}$ 是**有限**符号测度（$\nu$ 有限 $\implies$ 其实部虚部有限）✓；
- **符号测度**：对有限符号测度 $\rho$ 与 $\sigma$ 有限测度 $\mu$，先用 Hahn 分解写 $\rho = \rho^{+} - \rho^{-}$，对两个有限正测度各用一次 Radon–Nikodym：$d\rho^{\pm} = h^{\pm}\,\mathrm{d}\mu + d\rho^{\pm}_{s}$（$\rho^{\pm}_{s} \perp \mu$，$h^{\pm} \in L^{1}(\mu)$）✓；

> 续见 proofs/imp.rn-complex.2.md
