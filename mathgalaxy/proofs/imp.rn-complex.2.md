# imp.rn-complex
`imp.rn-complex` · 推出 · strong 边 · 根 `../`

`def.complex-measure` 复测度 + `def.signed-measure` 符号测度 + `thm.hahn-decomposition` Hahn 分解定理 + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 → `thm.rn-complex` 复测度的 Radon–Nikodym

- **拼起来**：令 $g_{k} := h_{k}^{+} - h_{k}^{-} \in L^{1}(\mu)$、$\lambda_{k} := \rho_{k,s}^{+} - \rho_{k,s}^{-}$（有限符号测度，$\lambda_{k}\perp\mu$）。则 $d\rho_{k}=g_{k}\,\mathrm{d}\mu+d\lambda_{k}$，故 $d\nu=(g_{1}+ig_{2})\,\mathrm{d}\mu+(\lambda_{1}+i\lambda_{2})$；其中 $\lambda:=\lambda_{1}+i\lambda_{2}$ 是复奇异测度（$|\lambda|\perp\mu$）✓；

- **唯一性**：若 $d\lambda + f\,\mathrm{d}\mu = d\lambda' + f'\,\mathrm{d}\mu$，与 $\mu$ 取 Lebesgue 分解比奇异部分得 $\lambda = \lambda'$；

> 续见 proofs/imp.rn-complex.3.md
