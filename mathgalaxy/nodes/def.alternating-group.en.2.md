# sign and alternating group　`def.alternating-group`
English entry · root `../`
[in graph](../#n=def.alternating-group)　·　[Chinese page (authoritative)](./def.alternating-group.md)

An equivalent formula (free of any choice of decomposition)

$$\operatorname{sgn}(\sigma) = \prod_{1 \le i < j \le n} \frac{\sigma(j) - \sigma(i)}{j - i} \in \{\pm 1\}$$

$\operatorname{sgn} : S_n \to \{\pm 1\}$ is a group homomorphism (surjective for $n \ge 2$). Its kernel

$$A_n := \ker \operatorname{sgn} = \{\, \sigma \in S_n : \operatorname{sgn}(\sigma) = 1 \,\}$$

is called the **alternating group of degree $n$**: $|A_n| = n!/2$, $A_n \trianglelefteq S_n$, $[S_n : A_n] = 2$.

> continued in nodes/def.alternating-group.en.3.md
