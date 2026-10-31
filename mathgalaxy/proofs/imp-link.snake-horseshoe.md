# 长正合列（蛇引理）$\implies$ 马蹄引理
`imp-link.snake-horseshoe` · 推出 · strong 边 · 根 `../`

`thm.snake-lemma` 蛇引理 + `thm.long-exact` 长正合列 → `lem.horseshoe` 马蹄引理

按马蹄引理的构造，取 $R_{n} = P_{n}\oplus Q_{n}$、微分 $d_{n} = \begin{pmatrix} d_{n}^{P} & \chi_{n} \\ 0 & e_{n}\end{pmatrix}$，其中 $\chi_{n}$ 归纳地由 $Q_{n}$ 的投射性抬升得出，使 $d^{2} = 0$ ✓。
于是 $0 \to P_{\bullet} \to R_{\bullet} \to Q_{\bullet} \to 0$ 是**逐项分裂**的复形短正合列。对它用「短正合列给出长正合列」：
$$\cdots \to H_{n}(P) \to H_{n}(R) \to H_{n}(Q) \xrightarrow{\ \delta\ } H_{n-1}(P) \to \cdots$$
两端是消解，故 $H_{n}(P) = H_{n}(Q) = 0$（$n \ge 1$）、$H_{0}(P) \cong M_{1}$、$H_{0}(Q) \cong M_{2}$ ✓。逐段读：$n \ge 2$ 时 $H_{n}(R)$ 被两个零夹住；$n = 1$ 时 $0 \to H_{1}(R) \to 0$；$n = 0$ 时 $M_{1} \to H_{0}(R) \to M_{2} \to 0$ 与原来的短正合列比较得 $H_{0}(R) \cong M$ ✓。
（追图部分用蛇引理把 $\delta$

> 续见 proofs/imp-link.snake-horseshoe.2.md
