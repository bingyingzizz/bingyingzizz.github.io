# 二次互反律　`thm.quadratic-reciprocity`　·　说明
根 `../`

$$\prod_{x=1}^{P} qx \equiv \prod_{x=1}^{P} (\varepsilon_{x} s_{x}) = \Bigl( \prod_{x} \varepsilon_{x} \Bigr) \Bigl( \prod_{x} s_{x} \Bigr) \equiv \Bigl( \prod_{x} \varepsilon_{x} \Bigr) P! \pmod p .$$

左边 $= q^{P} P!$，约去 $P!$（$p \nmid P!$）得 $q^{P} \equiv \prod_{x} \varepsilon_{x} = (-1)^{\mu}$，其中 $\mu = \#\{x : r_{x} > p/2\}$。由 **`lem.gauss-qr`**（Gauss 引理），$\left(\frac{q}{p}\right) = (-1)^{\mu}$，所以

$$\left(\frac{q}{p}\right) = (-1)^{\mu} .$$

**第二步：$\mu$ 与 $\sum m_{x}$ 同奇偶。** 由 $r_{x} = qx - p m_{x}$ 与 $\sum_{x} s_{x} = \sum_{x=1}^{P} x = \frac{P(P+1)}{2}$，一方面

$$\sum_{x} s_{x} = \sum_{x} r_{x} + \sum_{r_{x} > p/2} (p - 2r_{x}) ,$$

> 续见 notes/thm.quadratic-reciprocity.4.md
