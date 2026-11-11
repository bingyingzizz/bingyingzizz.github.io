# 二次互反律　`thm.quadratic-reciprocity`　·　说明
根 `../`

对固定 $x$，$\{y : 1 \le y \le Q,\ qx - py > 0\} = \{y : y < qx/p\}$ 恰有 $\min(Q, \lfloor qx/p \rfloor)$ 个元素；而 $qx/p \le qP/p = \frac{q(p-1)}{2p} < \frac{q}{2}$，故 $\lfloor qx/p \rfloor \le \frac{q-1}{2} = Q$，这个数就是 $\lfloor qx/p \rfloor$。于是 $\#R_{-} = \sum_{x=1}^{P} \lfloor qx/p \rfloor$。对称地（交换 $p \leftrightarrow q$、$x \leftrightarrow y$）$\#R_{+} = \sum_{y=1}^{Q} \lfloor py/q \rfloor$。因此

$$\sum_{x=1}^{P} \left\lfloor \frac{qx}{p} \right\rfloor + \sum_{y=1}^{Q} \left\lfloor \frac{py}{q} \right\rfloor = PQ .$$

**第四步：合并。** 把第二步用在 $(p, q)$ 与 $(q, p)$ 两个方向上，再代入第三步：

$$\left(\frac{q}{p}\right)\left(\frac{p}{q}\right) = (-1)^{PQ} = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}} ,$$

这正是要证的二次互反律 ✓。∎
