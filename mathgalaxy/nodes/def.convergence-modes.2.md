# 五种收敛　`def.convergence-modes`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/def.convergence-modes.md`

## 陈述（续）
- **一致收敛** $f_n \rightrightarrows  f$：$\forall\varepsilon > 0, \exists N > 0, \forall x \in X, n > N \implies |f_n(x) - f(x)| < \varepsilon$
- **几乎处处收敛** $f_n \to f$ a.e.：存在零集 $E$ 使 $f_n(x) \to f(x)$ 对一切 $x \in X \setminus E$ 成立
- **依测度收敛** $f_n \to f$ 依测度：$\forall\varepsilon > 0,
 \forall\delta > 0, \exists N, \forall n > N : \mu(\{x : |f_n(x) - f(x)| > \delta\}) < \varepsilon$
- **$L^{1}$ 收敛**：$\int |f_n - f| d\mu \to 0$
- **近一致收敛**：$\forall\varepsilon > 0$，存在 $E$ 使 $\mu(E) < \varepsilon$ 且 $f_n \rightrightarrows  f$ 在 $E^c$ 上一致
