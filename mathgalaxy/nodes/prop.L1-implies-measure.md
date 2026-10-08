# L¹ 收敛 ⟹ 依测度收敛　`prop.L1-implies-measure`
命题：$L^{1}$ 收敛蕴含依测度收敛（Markov 不等式）
layer 20 · 命题 · 可测函数与收敛 · 分析学

若 $f_n \to f$ 于 $L^1$，则 $f_n \to f$ 依测度：

$$\int |f_n - f| \to 0 \implies f_n \to f\text{ 依测度}$$

## 为什么成立（入边，证明在 proofs/）
- `def.integrable` 可积 / L¹：Markov 不等式 $\implies L^{1}$ 收敛蕴含依测度收敛　proofs/imp.L1-measure.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-measure.md
- `def.convergence-modes` 五种收敛：用到了定义 五种收敛　proofs/def-link.modes-L1.md

refs: Folland, Real Analysis, Prop. 2.29

> 说明见 `notes/prop.L1-implies-measure.md`
