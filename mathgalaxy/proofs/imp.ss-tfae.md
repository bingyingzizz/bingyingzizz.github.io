# imp.ss-tfae
`imp.ss-tfae` · 推出 · strong 边 · 根 `../`

`def.semisimple-representation` 半单表示 + `def.subrepresentation` 子表示 + `def.direct-sum-representation` 表示的直和 → `thm.semisimple-characterizations` 半单表示的等价刻画

(1)推出(2)：半单表示按定义是不可约表示的直和，故是不可约子表示之和。
(2)推出(3)：对有限维 $V$ 归纳。取不可约子表示 $U\subseteq V$，其和 $S$ 有补？若 $S\ne V$，取 $v\notin S$，其生成的子表示含不可约子表示 $U'$，把 $U'$ 并入 $S$；有限维保证终止，得 $V=\oplus U_i$。再把给定的 $W$ 与各 $U_i$ 相交，用不可约性逐个分裂。
(3)推出(1)：反复取不可约子表示并用 (3) 取补，维数下降，终止于直和分解。$\blacksquare$
