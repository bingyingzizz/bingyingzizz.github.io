# 超限递归把选择函数展开成良序
`def-link.recursion-wellordering` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 → `thm.wellordering` 良序定理

良序定理的证明：给定集合 $X$ 与选择函数 $c$（取 $X$ 的每个非空子集的一个元素），沿序数递归定义 $f(\alpha)$：若 $X\setminus f[\alpha]$ 非空则 $f(\alpha)=c(X\setminus f[\alpha])$，否则停。`thm.recursion-wellorder` 保证「按前段已取到的值定义下一步」是合法的集合构造，于是「一直取下去」这件事本身是一个对象而非过程。取尽时 $\alpha$ 段的序经 $f$ 拉回给出 $X$ 的良序；未取尽则得到 $X$ 到某段序数的单射，与 Hartogs 定理矛盾。∎

> 证明良序定理时用超限递归沿良序一步步往下取元素。
