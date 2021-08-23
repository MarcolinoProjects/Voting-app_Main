import axios, {AxiosInstance} from "axios";
import {CandidatesEntity, VotingSession} from "./types";

export const HOST = 'http://192.168.1.10:8080'

class VotingApi {
    private axiosIstance: AxiosInstance;

    constructor() {
        this.axiosIstance = axios.create({
            baseURL: `${HOST}/api`,
            timeout: 60000,
        });
    }

    createVotingSession(data: VotingSession) {
        return this.axiosIstance.post<VotingSession>("create", data);
    }

    voteOnCandidate(data: VotingSession, candidate: CandidatesEntity) {
        return this.axiosIstance.post(`${data.uuid}/${candidate.uuid}`);
    }

    fetchVotingSession(uuid: string) {
        return this.axiosIstance.get<VotingSession>(`${uuid}`);
    }

    deleteVotingSession(uuid: string) {
        return this.axiosIstance.delete(`${uuid}`);
    }
}

const votingGolangApi = new VotingApi();
export default votingGolangApi;
