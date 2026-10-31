# Darboux 判据 $\implies$ 振幅判据
`imp.riemann-criterion` · 推出 · strong 边 · 根 `../`

`thm.darboux-criterion` Darboux 判据 → `thm.riemann-criterion` 可积的振幅判据

记 $L^{*} = \sup_P L$、$U^{*} = \inf_P U$，恒有 $L(f, P) \le L^{*} \le U^{*} \le U(f, P)$。于是

$$U(f, P) - L(f, P) \ge U^{*} - L^{*}$$

**($\implies$)** 设 $f$ 可积，即 $L^{*} = U^{*}$。给定 $\varepsilon > 0$，取 $P_1$ 使 $L(f, P_1) > L^{*} - \varepsilon/2$、$P_2$ 使 $U(f, P_2) < U^{*} + \varepsilon/2$，并令 $P = P_1 \cup P_2$。由单调性

$$U(f, P) - L(f, P) \le U(f, P_2) - L(f, P_1) < \varepsilon$$

**($\Longleftarrow$)** 设对每个 $\varepsilon$ 都存在 $P$ 使 $U(f, P) - L(f, P) < \varepsilon$。由上式 $0 \le U^{*} - L^{*} < \varepsilon$ 对一切 $\varepsilon$ 成立，故 $U^{*} = L^{*}$，由 Darboux 判据 $f$ 可积。∎

> 续见 proofs/imp.riemann-criterion.2.md
