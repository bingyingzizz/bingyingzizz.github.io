# imp.snake-lemma
`imp.snake-lemma` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.equalizer` 等化子 / 余等化子 + `def.image` 像 / 余像 → `thm.snake-lemma` 蛇引理

**$\delta$ 怎么造（只用泛性质）。** 设 $k : K \rightarrowtail C$ 是 $c$ 的核，把 $g$ 沿 $k$ 拉回得 $P := B \times_{C} K$ 与投影 $p : P \to B$、$q : P \to K$：
1. $g f = 0$ 经拉回性质给出唯一的 $u : A \to P$；由 $f = \ker g$ 单、$g$ 满，得短正合列 $0 \to A \xrightarrow{\;u\;} P \xrightarrow{\;q\;} K \to 0$。
2. $g' b p = c\, g p = c\, k\, q = 0$，故 $b p$ 穿过 $f' = \ker g'$：存在唯一 $\beta : P \to A'$ 使 $f' \beta = b p$。
3. $f' \beta u = b p u = b f = f' a$，而 $f'$ 单，故 $\beta u = a$ —— 于是 $\beta$ 与 $A' \to \operatorname{coker

> 续见 proofs/imp.snake-lemma.2.md
