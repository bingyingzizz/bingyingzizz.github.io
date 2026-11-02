# 蛇引理　`thm.snake-lemma`　·　说明
根 `../`

**$\delta$ 怎么造（只用泛性质）。** 设 $k : K \rightarrowtail C$ 是 $c$ 的核，把 $g$ 沿 $k$ 拉回得 $P := B \times_{C} K$ 与投影 $p : P \to B$、$q : P \to K$：
1. $g f = 0$ 经拉回性质给出唯一的 $u : A \to P$；由 $f = \ker g$ 单、$g$ 满，得短正合列 $0 \to A \xrightarrow{\;u\;} P \xrightarrow{\;q\;} K \to 0$。
2. $g' b p = c\, g p = c\, k\, q = 0$，故 $b p$ 穿过 $f' = \ker g'$：存在唯一 $\beta : P \to A'$ 使 $f' \beta = b p$。
3. $f' \beta u = b p u = b f = f' a$，而 $f'$ 单，故 $\beta u = a$ —— 于是 $\beta$ 与 $A' \to \operatorname{coker} a$ 的复合把 $u$ 杀掉，由 $q = \operatorname{coker} u$ 的泛性质，存在唯一

$$\delta : K \longrightarrow \operatorname{coker} a, \qquad \delta \circ q = (A' \to \operatorname{coker} a) \circ \beta.$$

**正合性**同样逐步用核 / 余核的泛性质验证（关键一步是 $\operatorname{im} u = \ker q$），没有一步需要元素。∎

> 续见 notes/thm.snake-lemma.3.md
