# 商环 + 理想对应 $\implies$ 素 / 极大理想的刻画
`imp.prime-ideal` · 推出 · strong 边 · 根 `../`

`prop.ideal-basic` 理想的运算与商环泛性质 + `def.ideal` 理想 → `prop.prime-ideal` 素理想与极大理想

记 $\pi : A \to A/P$。交换环的商环仍是含幺交换环（`prop.ideal-basic` 的构造）。

**(i)** 若 $P$ 素：设 $\bar a \bar b = 0$，即 $ab \in P$，则 $a \in P$ 或 $b \in P$，即 $\bar a = 0$ 或 $\bar b = 0$ —— $A/P$ 无零因子，是整环。反之若 $A/P$ 是整环且 $ab \in P$，则 $\bar a \bar b = 0$，故 $\bar a = 0$ 或 $\bar b = 0$。

**(ii)** 商环的理想与「包含 $P$ 的理想」一一对应（$J \mapsto \pi^{-1}(J)$、$\bar J \mapsto \pi^{-1}(\bar J)$ 互逆）。于是 $A/P$ 只有 $0$ 与自身两个理想 $\iff$ 没有理想严格夹在 $P$ 与 $A$ 之间 $\iff$ $P$ 极大。含幺交换环是域 $\iff$ 只有平凡理想（若 $a \ne 0$ 不可逆，则 $(a)$ 是真理想；反之真理想里的非零元不可逆）。

> 续见 proofs/imp.prime-ideal.2.md
