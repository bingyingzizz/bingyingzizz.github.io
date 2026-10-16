# K(A) 允许分式演算　`prop.k-calculus-fractions`　·　说明
根 `../`

**预备：锥零调 $\iff$ 拟同构。** 复形态射 $s : K^{\bullet} \to L^{\bullet}$ 是拟同构，当且仅当它的**映射锥** $M(s)^{\bullet}$ 零调 —— 三角 $K^{\bullet} \to L^{\bullet} \to M(s)^{\bullet} \to K^{\bullet}[1]$ 取同调得长正合列，$M(s)$ 零调正是「$H^{n}(s)$ 全是同构」。

**Ore 条件。** 给定拟同构 $w : L'^{\bullet} \to L^{\bullet}$ 与任意 $f : K^{\bullet} \to L^{\bullet}$。记 $\theta := f - w : K^{\bullet} \oplus L'^{\bullet} \to L^{\bullet}$，取它的**移位锥** $N^{\bullet} := M(\theta)[-1]$ —— 锥的三角给出两个态射，方形交换

$$N^{\bullet} \xrightarrow{\;g\;} K^{\bullet}, \qquad N^{\bullet} \xrightarrow{\;t\;} L'^{\bullet}, \qquad f \circ g = w \circ t .$$

> 续见 notes/prop.k-calculus-fractions.2.md
