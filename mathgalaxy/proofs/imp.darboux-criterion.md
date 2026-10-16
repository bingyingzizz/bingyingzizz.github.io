# 可积的定义 $\implies$ Darboux 判据
`imp.darboux-criterion` · 推出 · strong 边 · 根 `../`

`def.riemann-integrable` Riemann 可积 → `thm.darboux-criterion` Darboux 判据

记 $L^{*} := \sup_P L(f, P)$、$U^{*} := \inf_P U(f, P)$。由上和、下和的单调性（加细后 $L$ 只增、$U$ 只减），对任意两个分割 $P, Q$ 有 $L(f, P) \le U(f, Q)$，故

$$L^{*} \le U^{*}$$

永远成立。下面说明「$L^{*} = U^{*}$」与「标记和收敛」等价。

**(i) 设 $L^{*} = U^{*} =: I$。** 给定 $\varepsilon > 0$，取分割 $P_1, P_2$ 使 $L(f, P_1) > I - \varepsilon$、$U(f, P_2) < I + \varepsilon$。令 $P := P_1 \cup P_2$，由单调性 $L(f, P) \ge L(f, P_1) > I - \varepsilon$、$U(f, P) \le U(f, P_2) < I + \varepsilon$。

> 续见 proofs/imp.darboux-criterion.2.md
