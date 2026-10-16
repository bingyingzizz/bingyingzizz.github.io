# 复测度的 Radon–Nikodym　`thm.rn-complex`　·　说明
根 `../`

**证明（把复情形拆回已经证过的实情形）。**
- **拆复测度**：$\nu = \nu_{1} + i\nu_{2}$，$\nu_{1}, \nu_{2}$ 是**有限**符号测度（$\nu$ 有限 $\implies$ 其实部虚部有限）✓；
- **符号测度**：对有限符号测度 $\rho$ 与 $\sigma$ 有限测度 $\mu$，先用 Hahn 分解写 $\rho = \rho^{+} - \rho^{-}$，对两个有限正测度各用一次 Radon–Nikodym：$d\rho^{\pm} = h^{\pm}\,\mathrm{d}\mu + d\rho^{\pm}_{s}$（$\rho^{\pm}_{s} \perp \mu$，$h^{\pm} \in L^{1}(\mu)$）✓；
- **拼起来**：令 $f := (h_{1}^{+} - h_{1}^{-}) + i(h_{2}^{+} - h_{2}^{-}) \in L^{1}(\mu)$、$\lambda := (\rho_{1,a} - \rho_{1,s}) + i(\cdots)$ 的奇异部分之和，则 $d\nu = d\lambda + f\,\mathrm{d}\mu$、$\lambda \perp \mu$ ✓；
- **唯一性**：若 $d\lambda + f\,\mathrm{d}\mu = d\lambda' + f'\,\mathrm{d}\mu$，与 $\mu$ 取 Lebesgue 分解比奇异部分得 $\lambda = \lambda'$；比绝对连续部分并用密度 a.e. 唯一得 $f = f'$ a.e. ✓。∎
⚠️ 这里 $f \in L^{1}(\mu)$（真正可积）而不是「广义可积」，因为复测度**有限**

> 续见 notes/thm.rn-complex.2.md
