# Euclid 整环 $\implies$ PID：取范数最小的元素生成理想
`imp.ring-euclid-pid` · 推出 · strong 边 · 根 `../`

`def.euclidean-domain` Euclid 整环 → `def.pid` 主理想整环

设 $A$ 是 Euclid 整环（欧几里得函数 $N$），$I \trianglelefteq A$ 是非零理想 $I \ne 0$。



在 $I$ 中取 $N$ 最小的非零元 $b$（$\mathbb{N}$ 良序，故存在）。



对任意 $a \in I$ 做带余除法：$a = qb + r$，$r = 0$ 或 $N(r) < N(b)$。注意 $r = a - qb \in I$（$a, b \in I$），而 $b$ 的 $N$ 在 $I \setminus \{0\}$ 里最小，故 $N(r) < N(b)$ 不可能 —— 只能 $r = 0$。



于是 $a = qb \in (b)$，即 $I \subseteq (b)$；反向 $(b) \subseteq I$ 显然。故 $I = (b)$ 是主理想，$A$ 是 PID。
