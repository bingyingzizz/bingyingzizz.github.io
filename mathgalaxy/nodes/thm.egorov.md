# Egorov 定理　`thm.egorov`
Egorov 定理：a.e. 收敛 $\implies$ 近一致
layer 20 · 定理 · 可测函数与收敛 · 分析学

设 $\mu(X) < \infty$，且 $f_n \to f$ a.e.。则 $f_n \to f$ **近一致**：

$$\forall\varepsilon > 0, \exists E \subseteq X : \mu(E) < \varepsilon,\text{ 且} f_n \rightrightarrows  f\text{ 在} X \setminus E\text{ 上一致}$$

## 为什么成立（入边，证明在 proofs/）
- `def.convergence-modes` 五种收敛：a.e. 收敛 + 有限测度 $\implies$ 近一致　proofs/imp.egorov.md
- `def.convergence-modes` 五种收敛：用到了定义 五种收敛　proofs/def-link.modes-egorov.md
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-egorov.md

## 它能推出什么 / 谁在用它
- ⇒ `cor.lusin` Lusin 定理

refs: Folland, Real Analysis, Theorem 2.33

> 说明见 `notes/thm.egorov.md`
