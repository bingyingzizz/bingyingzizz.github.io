# PID $\implies$ UFD：升链条件给存在性，不可约=素给唯一性
`imp.ring-pid-ufd` · 推出 · strong 边 · 根 `../`

`def.pid` 主理想整环 → `def.ufd` 唯一分解整环

**存在性**（分解不能无限细）：若某个非零非单位元 $a$ 写不成有限乘积，则可写 $a = a_{1}b_{1}$ 且两者都非单位，对其一继续拆 —— 得到严格上升的理想链 $(a) \subset (a_{1}) \subset (a_{2}) \subset \cdots$。其并 $I = \bigcup (a_{i})$ 是理想，PID 给出 $I = (d)$，于是 $d \in (a_{n})$ 对某个 $n$ 成立，链在 $n$ 停止 —— 与「能无限拆」矛盾。

**不可约 = 素**（PID 里）：设 $p$ 不可约且 $p \mid ab$。理想 $(p, a)$ 是主理想，记作 $(d)$，则 $d \mid p$；$p$ 不可约给出 $d \sim 1$ 或 $d \sim p$。若 $d \sim p$，则 $p \mid a$，完事；若 $d \sim 1$，则 $(p, a) = A$，写 $1 = up + va$，乘 $b$ 得 $b = upb + vab$，而 $p \mid ab$，故 $p \mid b$。

> 续见 proofs/imp.ring-pid-ufd.2.md
