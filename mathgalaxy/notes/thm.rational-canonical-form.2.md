# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

**引理 1（Smith 标准形，$K[x]$ 版）**：设 $R = K[x]$。任意 $m \times n$ 矩阵 $M$ 经初等行/列变换可化成 $\operatorname{diag}(d_{1}, \ldots, d_{r}, 0, \ldots, 0)$，其中 $d_{1} \mid d_{2} \mid \cdots \mid d_{r}$ 非零，$r = \operatorname{rank} M$。**证明**：在所有与 $M$ 等价的矩阵中，取「非零元素的最小次数」$\delta$ 最小的一个；把达到 $\delta$ 的元素挪到 $(1,1)$，记作 $a$。若第一列某元素 $b$ 不被 $a$ 整除，作带余除法 $b = qa + r$（$\deg r < \delta$），把第 1 行乘 $-q$ 加到该行，得到含次数更小非零元的等价矩阵，与 $\delta$ 的最小性矛盾；故 $a$ 整除第一列全部元素，用行变换清空第一列。同理用列变换清空第一行。若余下子块有元素不被 $a$ 整除，把该行加到第 1 行、再用列变换减去 $a$ 的倍数，又得到次数更小的非零元，矛盾；故 $a$ 整除整个余下子块。对余下子块归纳，得 $\operatorname{diag}(a, e_{1}, \ldots)$；初等变换不改变「全部元素生成的理想」，故 $a \mid e_{1}$

> 续见 notes/thm.rational-canonical-form.3.md
