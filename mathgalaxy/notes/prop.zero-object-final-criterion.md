# 零对象与终对象　`prop.zero-object-final-criterion`　·　说明
根 `../`

**证明。** 预加性给每个 $\operatorname{Hom}(X,Y)$ 一个阿贝尔群结构，且复合**双线性** —— 于是**零态射**永远存在（它就是群的单位元），并且由双线性把 $0 + h = h$ 展开得
$$0_{Y,Z}\circ h = 0_{X,Z}, \qquad f\circ 0_{X,Y} = 0_{X,Z} ✓$$
**终对象 $\implies$ 零对象**：$M$ 终对象时 $\operatorname{End}(M) = \{1_{M}\}$ 只有一个元素；而它是阿贝尔群，群里的唯一元素必是单位元，故 $1_{M} = 0_{M}$ ✓。
**零对象 $\implies$ 终对象**：设 $1_{M} = 0_{M}$。任给 $X$ 与 $f, g : X \to M$，由双线性
$$f = 1_{M}\circ f = 0_{M}\circ f = 0_{X,M}, \qquad g = 0_{X,M},$$
故 $f = g$：$\operatorname{Hom}(X,M)$ 至多一个元素，而它非空（有零态射），所以 $M$ 是终对象 ✓。
**始对象**：把整个论证搬到 $\mathcal{C}^{\mathrm{op}}$ 即可 ✓。∎

> 续见 notes/prop.zero-object-final-criterion.2.md
