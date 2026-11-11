# 可解性对子群与商群的封闭支撑两个方向
`dep.solvablequotients-radical` · 推出 · strong 边 · 根 `../`

`thm.solvable-quotients` 可解性对子群与商群封闭 → `thm.radical-solvable` 根式可解 与 伽罗瓦群可解

两个方向都要「可解性对子群、商群封闭」（`thm.solvable-quotients`）。$(\implies)$ 设 $K/F$ 根式可解，塔 $F=F_{0}\subseteq\cdots\subseteq F_{m}$ 每步是循环扩张（或 $S_{p}$ 型）。令 $G_{i}=\operatorname{Gal}(K/F_{i})$，得 $G_{0}=G\supseteq\cdots\supseteq G_{m}=1$；每步 $G_{i+1}\trianglelefteq G_{i}$ 且 $G_{i}/G_{i+1}\cong\operatorname{Gal}(F_{i+1}/F_{i})$ 循环或 $S_{p}$ 型，故各商可解，由封闭性 $G$ 可解。$(\Leftarrow)$ 设 $G$ 可解，取可解列 $G=G_{0}\supseteq\cdots\supseteq G_{m}=1$，对应固定域塔 $F\subseteq K^{G_{m}}\subseteq\cdots\subseteq K$；每步 $K^{G_{i+1}}/K^{G_{i}}$ 是循环扩张，由 Kummer 理论（含足够单位根时）可写成根

> 续见 proofs/dep.solvablequotients-radical.2.md
