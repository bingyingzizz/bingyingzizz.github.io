# 互素理想　`def.comaximal`　·　说明
根 `../`

$A = \mathbb{Z}$、$I = (m)$、$J = (n)$ 时，$I + J = (m) + (n) = (\gcd(m, n))$，所以「互素」正是 $\gcd(m,n) = 1$ —— 中国剩余定理的「两两互素」条件在一般环里的正确说法。



等价刻画：$I + J = A$ $\iff$ 存在 $u \in I$、$v \in J$ 使 $u + v = 1$（Bézout 的一般形式）。



互素的一个好用推论：$I \cap J = IJ$（一般只有 $IJ \subseteq I \cap J$）。证明：$a \in I \cap J$，写 $1 = u + v$，则 $a = au + av$，而 $au \in IJ$（$a \in J$、$u \in I$）、$av \in IJ$（$a \in I$、$v \in J$）。
