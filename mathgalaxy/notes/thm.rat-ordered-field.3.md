# ℚ 是有序域　`thm.rat-ordered-field`　·　说明
根 `../`

**⑦ 与乘法相容。** 设 $a/b \le c/d$ 且 $0 \le e/f$（$f > 0$，故 $e \ge 0$）。则 $ae/(bf) \le ce/(df) \iff aedf \le cebf$。若 $e = 0$ 两边都是 $0$；若 $e > 0$，两边同除正元 $ef$ 得 $ad \le cb$，成立。

**⑧ 嵌入。** $n \mapsto n/1$ 是单射（$n/1 = m/1 \iff n = m$），且 $(m+n)/1 = m/1 + n/1$、$(mn)/1 = (m/1)(n/1)$、$m \le n \iff m/1 \le n/1$。故 $\mathbb{Z}$ 保运算保序地嵌入 $\mathbb{Q}$。∎

**⑨ 补一句：为什么它还不是 $\mathbb{R}$。** 集合 $S = \{q \in \mathbb{Q} : q^2 < 2\}$ 有上界（例如 $2$）却没有上确界。若 $q_0 = \sup S$ 存在：$q_0^2 < 2$ 时由稠密性可在 $q_0$ 右侧取到 $q \in S$，与上界矛盾；$q_0^2 > 2$ 时可取到比 $q_0$ 小的上界，与「最小」矛盾。故只能 $q_0^2 = 2$，但 $q^2 = 2$ 在 $\mathbb{Q}$ 中无解（$q = m/n$ 既约时 $m^2 = 2n^2$ 迫使 $2 \mid m$，进而 $2 \mid n$，矛盾）。这正是 `def.real` 要把 $\mathbb{Q}$ 补成 $\mathbb{R}$ 的理由。
