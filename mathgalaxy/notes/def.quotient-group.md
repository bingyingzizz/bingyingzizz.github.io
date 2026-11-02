# 商群　`def.quotient-group`　·　说明
根 `../`

商群就是**集合层面的商集**再往上一层：先在 $G$ 上用等价关系「差一个 $N$ 的元素」商掉，再验证商集上还残留着一个运算。

**泛性质**（商群真正的用处）：对任何群同态 $\varphi : G \to G'$，若 $N \subseteq \ker\varphi$，则 $\varphi$ 唯一地穿过 $\pi$：存在唯一的 $\overline{\varphi} : G/N \to G'$ 使 $\overline{\varphi} \circ \pi = \varphi$。

⚠️ 商**群**只对正规子群有；商**集** $G/H$ 对任何子群都有（左陪集照样划分 $G$），但那个商集上一般没有群结构。
