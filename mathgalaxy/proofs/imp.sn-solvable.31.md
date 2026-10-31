# $A_5$ 的单性（按共轭类枚举）$\implies$ $S_n$ 可解 $\iff n \le 4$
`imp.sn-solvable` · 推出 · strong 边 · 根 `../`

`def.solvable-group` 可解群 + `def.alternating-group` 符号与交错群 + `thm.solvable-quotients` 可解性对子群与商群封闭 + `def.simple-group` 单群 → `prop.sn-solvable` 对称群的可解性

两个方向合起来即得 $S_n$ 可解 $\iff n \le 4$。∎

> ⭐ 整个证明的关键是**把「$A_5$ 单」变成一个可以逐项核对的有限计算**：共轭类大小只有 $1, 15, 20, 12, 12$，正规子群是若干类的并、且阶整除 $60$ —— 枚举 $2^{4} = 16$ 种组合，只有 $1$ 与 $60$ 可行。这比「抽象地论证单性」可靠得多，也省掉了「证明 $A_n$（$n \ge 5$）都单」这件更重的事：判 $S_n$ 不可解只需要 $A_5$ 这一个。

⚠ 第四步用了一个小事实：$A_5 \le A_n$（$n \ge 5$）—— 固定后 $n-5$ 个点、在前 $5$ 个点上做偶置换即可。它是 $A_n$ 的子群，而子群可解性向下传（`thm.solvable-quotients` (a)）。
