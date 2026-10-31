# 整数的带余除法　`thm.int-division`　·　说明
根 `../`

唯一性：若 $a = qb + r = q'b + r'$，则 $(q - q')b = r' - r$，于是 $|b| \mid |r' - r|$；但 $|r' - r| < |b|$，只能 $r' = r$，随之 $q' = q$。



存在性用 $\mathbb{Z}$ 的良序：固定 $b > 0$，集合 $\{\, a - qb : q \in \mathbb{Z},\ a - qb \ge 0 \,\}$ 非空（Archimedes 性质），取其最小元为 $r$；若 $r \ge b$ 则 $r - b$ 更小，矛盾。



$K[x]$ 上的对应定理是 `thm.division-algorithm`：同一个证明结构，只是把「次数」换成「绝对值」—— 两者都是 Euclid 整环。
