# 二次互反律　`thm.quadratic-reciprocity`　·　说明
根 `../`

另一方面 $\sum_{x} r_{x} = q\sum_{x} x - p \sum_{x} m_{x}$。把这些代入并两边模 $2$：$\sum_{r_{x} > p/2}(p - 2r_{x}) \equiv p\mu \equiv \mu \pmod 2$，$q \sum_{x} x \equiv \sum_{x} x \pmod 2$，于是

$$\sum_{x} x \equiv \sum_{x} x + \sum_{x} m_{x} + \mu \pmod 2 ,$$

消去 $\sum_{x} x$ 得 $\sum_{x} m_{x} \equiv \mu \pmod 2$。故

$$\left(\frac{q}{p}\right) = (-1)^{\mu} = (-1)^{\sum_{x=1}^{P} \lfloor qx/p \rfloor} .$$

**第三步：矩形计数。** 在矩形 $R = \{(x, y) \in \mathbb{Z}^{2} : 1 \le x \le P,\ 1 \le y \le Q\}$（共 $PQ$ 个整点）里，直线 $qx = py$ 不含任何整点：$p \mid qx$ 且 $p \nmid q$ 给出 $p \mid x$，但 $1 \le x \le P < p$，矛盾。故 $R$ 分成 $R_{-} = \{qx - py > 0\}$ 与 $R_{+} = \{qx - py < 0\}$ 两部分，$\#R = \#R_{-} + \#R_{+} = PQ$。

> 续见 notes/thm.quadratic-reciprocity.5.md
