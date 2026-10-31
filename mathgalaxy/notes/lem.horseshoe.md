# 马蹄引理　`lem.horseshoe`　·　说明
根 `../`

**证明（先造微分，再用长正合列验正合）。**
**① 逐层分裂。** 含入与投影 $0 \to P_{n} \to P_{n}\oplus Q_{n} \to Q_{n} \to 0$ 本来就有显式截面 $(p, q) \mapsto q$、缩回 $x \mapsto (x, 0)$，与投射性无关；用的是这一步的**分裂性**，不是 $P_{n}$ 投射 ✓。
**② 选微分。** 令
$$d_{n} = \begin{pmatrix} d_{n}^{P} & \chi_{n} \\ 0 & e_{n} \end{pmatrix} : P_{n}\oplus Q_{n} \longrightarrow P_{n-1}\oplus Q_{n-1}, \qquad \chi_{n} : Q_{n} \to P_{n-1}.$$
分块乘法给出 $d_{n-1}d_{n}$ 的右上块 $= d_{n-1}^{P}\chi_{n} + \chi_{n-1}e_{n}$，另外三块为零。所以 $d^{2} = 0$ 当且仅当 $d_{n-1}^{P}\chi_{n} = -\chi_{n-1}e_{n}$。而 $\chi_{n}$ 可以**归纳地**选：已有 $\chi_{n-1}$ 时，
$$d_{n-2}^{P}\bigl(-\chi_{n-1}e_{n}\bigr) = -\bigl(d_{n-2}^{P}\chi_{n-1}\bigr)e_{n} = \chi_{n-2}e_{n-1}e_{n} = 0,$$
故 $-\chi_{n-1}e_{n}$ 的像落在 $\ker d_{n-2}^{P} = \operatorname{im} d_{n-1}^{P}$ 里（$P_{\bullet}$ 正合）✓；沿满射 $P_{n-1} \twoheadrighta

> 续见 notes/lem.horseshoe.2.md
