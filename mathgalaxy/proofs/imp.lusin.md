# 简单函数逼近 + Egorov $\implies$ Lusin
`imp.lusin` · 推出 · strong 边 · 根 `../`

`thm.approximation-L1` L¹ 里的逼近 + `thm.egorov` Egorov 定理 → `cor.lusin` Lusin 定理

**① 先用简单函数逼近。** 由「$L^{1}$ 里的逼近」，取简单函数列 $\{\varphi_n\}$ 使 $\int|f - \varphi_n| \to 0$；取子列还可保证 $\varphi_n \to f$ a.e.（由 $L^{1}$ 收敛 $\implies$ 依测度收敛 + 抽 a.e. 子列）。而简单函数是有限个可测集的特征函数之和。

**② 先对「指示函数」办到。** 对可测集 $A \subseteq [a, b]$ 与任意 $\varepsilon > 0$，由测度的正则性可找到紧集 $E \subseteq A$ 使 $\mu(A \setminus E) < \varepsilon$，于是 $\chi_A|_{E}$ 连续（在 $E$ 上恒为 1）。有限多个这样的紧集取交，就能让一整个简单函数在某个紧集上连续。

> 续见 proofs/imp.lusin.2.md
